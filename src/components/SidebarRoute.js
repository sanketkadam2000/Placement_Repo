<Router>
<Sidebar>
  <Routes> 
  <Route path="/Dashboard" element={<Dashboard />} exact />
  <Route path="/Student" element={<Student />} exact />
  <Route path="/Admin" element={<Admin/>} exact />
  <Route path="/College" element={<College/>} exact />
  <Route path="/Certificate" element={<Certificate/>} exact />
  <Route path="/Placement" element={<Placement/>} exact />
  <Route path="/User" element={<User/>} exact />
  </Routes>
  </Sidebar>
  </Router>