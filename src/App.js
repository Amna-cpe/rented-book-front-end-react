import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import AdminPage from "./Pages/AdminPage/index";
import HomePage from "./Pages/HomePage/index";


function App() {

  return (
  
      <Router>
        <Routes>
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/*" element={<HomePage />} />
          {/* another route for searching a category */}
          <Route path="/:id" element={<HomePage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
  
  );
}

export default App;
