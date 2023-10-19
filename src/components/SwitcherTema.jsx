import themeOn from '../assets/img/sol.png'
import themeOff from '../assets/img/luna.png'
import { IconoTema } from '../assets/css/UI';

export default ({tema}) => {
    const claro = <IconoTema src={themeOn} alt="Tema_Claro" />;
    const oscuro = <IconoTema src={themeOff} alt="Tema_Oscuro" />;

    return <>{tema ? oscuro : claro}</>
}