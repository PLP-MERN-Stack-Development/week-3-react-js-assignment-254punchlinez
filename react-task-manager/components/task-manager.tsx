"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Trash2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useLocalStorage } from "@/hooks/useLocalStorage"

interface Task {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

type FilterType = "all" | "active" | "completed"

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", [])
  const [newTask, setNewTask] = useState("")
  const [filter, setFilter] = useState<FilterType>("all")

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date(),
      }
      setTasks([...tasks, task])
      setNewTask("")
    }
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTask()
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Task Manager</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Add Task Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a new task..."
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button onClick={addTask} className="px-4">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2">
            {(["all", "active", "completed"] as FilterType[]).map((filterType) => (
              <Button
                key={filterType}
                variant={filter === filterType ? "primary" : "secondary"}
                size="sm"
                onClick={() => setFilter(filterType)}
                className="capitalize"
              >
                {filterType}
              </Button>
            ))}
          </div>

          {/* Task List */}
          <div className="space-y-2">
            {filteredTasks.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                {filter === "all" ? "No tasks yet. Add one above!" : `No ${filter} tasks.`}
              </p>
            ) : (
              filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className={`flex items-center gap-3 p-3 border rounded-md transition-all ${
                    task.completed
                      ? "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                      : "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600"
                  }`}
                >
                  <Button
                    variant={task.completed ? "primary" : "secondary"}
                    size="sm"
                    onClick={() => toggleTask(task.id)}
                    className="p-1 h-8 w-8"
                  >
                    {task.completed && <Check className="h-4 w-4" />}
                  </Button>

                  <span
                    className={`flex-1 ${
                      task.completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {task.text}
                  </span>

                  <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)} className="p-1 h-8 w-8">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))
            )}
          </div>

          {/* Task Stats */}
          {tasks.length > 0 && (
            <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
              {tasks.filter((t) => !t.completed).length} active, {tasks.filter((t) => t.completed).length} completed
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
