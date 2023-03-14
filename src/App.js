import "./App.css";

import AppWrapper from "./components/AppWrapper/AppWrapper";
import EjemploEnLinea from "./components/EjemploEnLinea/EjemploEnLinea";
import EjemploModules from "./components/EjemploModules/EjemploModules";
import EjemploObjeto from "./components/EjemploObjeto/EjemploObjeto";
import EjemploStyled from "./components/EjemploStyled/EjemploStyled";
import MaterialUI from "./components/MaterialUI/MaterialUI";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
	return (
		<>
			{/* <AppWrapper>
				<h1>HOLA</h1>
				<EjemploEnLinea />
				<EjemploObjeto />
				<EjemploModules />
				<EjemploStyled />
			</AppWrapper> */}
			<MaterialUI />
			<GlobalStyles />
		</>
	);
}

export default App;
