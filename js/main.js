'use strict';
{
  const item = document.querySelectorAll('.item');
  const propsList = document.querySelectorAll('.props__list');
  const propsItems4 = propsList[0].querySelectorAll('.props__item');
  const propsItems2 = propsList[2].querySelectorAll('.props__item');
  const propsItems5 = propsList[3].querySelectorAll('.props__item');
  const propsItems3 = propsList[4].querySelectorAll('.props__item');
  const propsItems6 = propsList[5].querySelectorAll('.props__item');

  propsItems4[2].after(propsItems2[3]);

  propsList[2].append(propsItems6[8], propsItems6[9]);

  propsList[4].append(...propsItems5);
  propsList[3].append(...propsItems3);

  item[3].after(item[0]);
}
