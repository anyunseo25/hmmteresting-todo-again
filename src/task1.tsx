export function Task() {
    return (
    <div>
<html lang="ko">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>YouTube Clone</title>
  <link href="dist/styles.css" rel="stylesheet" />
</head>
<body className="bg-amber-200">
    <header className="bg-amber-200 shadow-amber-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/YouTube_icon_%282013-2017%29.png/500px-YouTube_icon_%282013-2017%29.png" alt="Logo" className="h-8" />
          <input type="text" placeholder="Search" className="px-4 py-2 w-96 border border-gray-300 rounded-lg" />
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 button">Sign In</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Upload</button>
        </div>
      </div>
    </header>
    <main className="flex p-4">
      <section className="w-3/4 mr-4">
        <div className="bg-black mb-4">
          <iframe className="w-full h-96" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
        </div>
        <h2 className="text-xl font-bold">Video Title</h2>
        <p className="text-gray-600 mt-2">Video description goes here.</p>
      </section>
  
      <aside className="w-1/4">
        <ul>
          <li className="mb-4">
            <div className="flex items-center space-x-4">
              <img className="w-24 h-16 object-cover rounded-lg" src="https://via.placeholder.com/300x180" alt="Video Thumbnail" />
              <div>
                <h3 className="text-lg font-serif">Video Title 1</h3>
                <p className="text-xs text-gray-500">Channel Name</p>
              </div>
            </div>
          </li>
          <li className="mb-4">
            <div className="flex items-center space-x-4">
              <img className="w-24 h-16 object-cover rounded-lg" src="https://via.placeholder.com/300x180" alt="Video Thumbnail" />
              <div>
                <h3 className="text-sm font-semibold">Video Title 2</h3>
                <p className="text-xs text-gray-500">Channel Name</p>
              </div>
            </div>
          </li>
        </ul>
      </aside>
    </main>
</body>
</html>
    </div>
    )
}