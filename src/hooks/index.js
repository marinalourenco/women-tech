import React from 'react';
import { WomenProvider} from './WomenProvider'

function AppProvider({children}) {
  return (
    <WomenProvider>
      {children}
    </WomenProvider>
  );
}

export default AppProvider;