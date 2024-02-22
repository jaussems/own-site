import _ from 'lodash';
import "style.scss";

const component = () => {
    const element = document.createElement('div');


    
    element.innerHTML = _.join([`Hello`, `Jannes`], ` `);

    return element;

}

document.body.appendChild(component())