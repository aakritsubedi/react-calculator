import React from 'react';
import Hello from './components/hello';
import Welcome from './components/welcome';

function App() {
    let user = {
        fName: 'Aakrit',
        lName: 'Subedi'
    }
    return ( 

        <div className = "App" >
           <Hello userInfo={user} />
           <Welcome fName={user.fName} />
        </div>
    );
}

export default App;