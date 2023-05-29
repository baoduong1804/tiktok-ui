import Header from '~/components/Layout/components/Header';
import Sidebal from './Sidebal';

function DefaultLayout({ children }) {
   return (
      <div>
         <Header />
         <div className="container">
            <Sidebal />
            <div className="content">{children}</div>
         </div>
      </div>
   );
}

export default DefaultLayout;
