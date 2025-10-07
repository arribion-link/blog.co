import React from 'react'

const Admin = () => {
  return (
    <section className='flex gap-8 justify-between p-6 min-h-7/12'>
      <div className="w-full bg-black rounded-2xl">
        <div>
          <img src="" alt="blog" />
        </div>
        <div>
          <h2>title</h2>
        </div>
        <div>
          <h2>time</h2>
        </div>
        <div>
          <button>Home page Preview</button>
          <button>full blog preview</button>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </div>
      <div className="bg-blue-950 p-8 max-w-80 rounded-2xl">
        <form action="">
          <div className="form-group">
            <label htmlFor="imageUrl"></label>
            <input
              type="text"
              placeholder="insert image url"
              value="imageUrl"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title"></label>
            <input
              type="text"
              placeholder="blogTitle"
              value="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="preview"></label>
            <textarea
              placeholder="blog short preview.."
              value="imageUrl"
            />
            </div>
            <div className="form-group">
            <label htmlFor="preview"></label>
            <textarea
              placeholder="blog content"
              value="imageUrl"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Admin
