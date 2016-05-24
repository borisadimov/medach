/*
A new custom page just for our app.
Browse to http://localhost:3000/my-custom-route to see it.
*/

import React from 'react';



const MyCustomPage = () => {

  const HTML = () => {
    return {
      __html: `<iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://money.yandex.ru/embed/shop.xml?account=410011892545996&quickpay=shop&payment-type-choice=on&mobile-payment-type-choice=on&writer=seller&targets=%D0%98%D0%BD%D1%84%D1%80%D0%B0%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0+%D0%B8+%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D0%9C%D0%B5%D0%B4%D0%B0%D1%87%D0%B0.&targets-hint=&default-sum=100&button-text=03&successURL=board.medach.pro%2Fthank-you" width="450" height="198"></iframe>`
    }
  }
  return (
    <div
      style={{textAlign: 'center'}}
      dangerouslySetInnerHTML={HTML()}
    >
    </div>
  )
}

export default MyCustomPage;