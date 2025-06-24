import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TaskManager from "@/components/task-manager"
import Posts from "@/components/posts"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">React Task Manager</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive React application demonstrating component architecture, state management, hooks usage, and
              API integration.
            </p>
          </div>

          {/* Tasks Section */}
          <section id="tasks">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Task Management</h2>
            <TaskManager />
          </section>

          {/* Posts Section */}
          <section id="posts">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              API Integration - Posts
            </h2>
            <Posts />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
