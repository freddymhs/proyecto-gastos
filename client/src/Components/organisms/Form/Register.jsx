import Input from '../../atoms/Input/Index';
import Button from '../../atoms/Button/Index';
import { Link } from 'react-router-dom';
import Text from '../../atoms/Text/Index';

function Register(props) {
  const { press } = props;
  return (
    <>
      <Text text="Bievenido" typet="h1" />
      <Text text="Registrese con sus datos" typet="h2" />
      <Input id="email" />
      <Input id="password" />
      <Input id="repassword" />
      <Button buttontext="Registrarse" />
      <Text text="Ingresar con mi cuenta" press={press} typet="psmall" />
      <Text text="o" typet="p" />
      <Link to="/google">
        <Button buttontext="Ingresar con Google" />
      </Link>
      <Link to="/Facebook">
        <Button buttontext="Ingresar con Facebook" />
      </Link>
    </>
  )
}

export default Register;