import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrTop from '../pages/PrTop';
import PrLogin from '../pages/PrLogin';
import PrMain from '../pages/PrMain';
const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PrTop />} />
        <Route path="/login" element={<PrLogin />} />
        <Route path="/main" element={<PrMain />} />
      </Routes>
    </Router>
  );
};

export default PageRouter;
