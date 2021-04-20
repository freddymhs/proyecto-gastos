import Image from '../../atoms/Image/Index';
import Text from '../../atoms/Text/Index';
import catfood from '../../../assets/categories/welcome/cat-cloth.svg';
import catentrten from '../../../assets/categories/welcome/cat-entretenimiento.svg';
import catgift from '../../../assets/categories/welcome/cat-gift.svg';
import cathealt from '../../../assets/categories/welcome/cat-health.svg';
import catsubs from '../../../assets/categories/welcome/cat-subscription.svg';
import cattrans from '../../../assets/categories/welcome/cat-trans.svg';
import mobile from '../../../assets/categories/welcome/003-mobile-phone.svg';
import computer from '../../../assets/categories/welcome/006-computer.svg';



const Panel = () => {
  return (

    <>
      <Text text="Aplicacion de Gastos" typet="h2"></Text>
      <div className="grid-icons-categories">
        <Image dimension="mini" source={catfood} />
        <Image dimension="mini" source={catentrten} />
        <Image dimension="mini" source={catgift} />
        <Image dimension="mini" source={cathealt} />
        <Image dimension="mini" source={catsubs} />
        <Image dimension="mini" source={cattrans} />
      </div>
      <Text text="La organizacion y el calculo de sus Gastos personales en formato Libreta de facil gestion y administracion con reportes mensuales." typet="p" >
      </Text>
      <Image dimension="mini" source={mobile} />
      <Image dimension="mini" source={computer} />
      <Text text="Multiplataforma" typet="p"></Text>
    </>
  );
}

export default Panel;