import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from "./pages/Blogs";
import { Publish } from './pages/Publish';
import { Edit } from './pages/Edit';
import { Ownblogs } from './pages/Ownblogs';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <div >
      <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/own" element={<Ownblogs />} />
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}

export default App