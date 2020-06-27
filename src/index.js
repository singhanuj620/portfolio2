import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileApp from './MobileApp'
import DesktopApp from './DesktopApp'

if(window.screen.width <= 414){
	ReactDOM.render(<MobileApp />,document.getElementById('root')
	);
}

else{
	ReactDOM.render(<DesktopApp />,document.getElementById('root')
	);
}


