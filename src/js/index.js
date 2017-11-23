import _ from 'lodash';
import '../css/index.css';
import myImg from '../img/test01.jpg';
import data from '../data/data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'World','世间有为法'], ' ');
  element.classList.add('hello');

     // 将图像添加到我们现有的 div。
   var myIcon = new Image();
   myIcon.src = myImg;
   element.appendChild(myIcon);

   console.log(data);
  return element;
}

document.body.appendChild(component());