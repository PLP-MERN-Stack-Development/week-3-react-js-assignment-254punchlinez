export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">About</h3>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              A comprehensive React application demonstrating modern development practices.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Contact</h3>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              Built with React, Next.js, and Tailwind CSS
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-center text-base text-gray-600 dark:text-gray-400">
            © 2024 Task Manager. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
