import React from 'react';
import TableInfo from '../../Components/atoms/Table/Index';
import ButtonAction from '../../Components/atoms/Button/Index';
import ButtonSwitch from '../../Components/atoms/ButtonSwitch/index';
import Icon from '../../Components/atoms/Icon/Index';
import Text from '../../Components/atoms/Text/Index';
import Select from '../../Components/atoms/Select/index';

// 


function Index() {




  return (
    <>

      <TableInfo caption="Mis Gastos" />

      <div>
        <Text text="Gestion de Gastos" typet="h1" />
        <ButtonAction buttontext="Nuevo" />
        <ButtonAction buttontext="Editar" />
      </div>

      <div>
        <Icon iname="filter_list" size="small" />
        <Text text="Filtros" typet="p" />

        <Text text="Fecha" typet="p" />
        <ButtonSwitch id="Mes" />
        <ButtonSwitch id="Anio" />

        <Text text="Estado" typet="p" />
        <ButtonSwitch id="Pagado" />
        <ButtonSwitch id="Pagar" />

        <Text text="Gastos" typet="p" />
        <Text text="$6000000" />

        <Text text="Recomendado" typet="p" />
        <Text text="$9000000" />

        <Text text="Tipo Finanzas" typet="h4" />
        <Select id="selectAFinance" iname="pap" />
      </div>
    </>
  )
}
// export default Index;



export default Index;
