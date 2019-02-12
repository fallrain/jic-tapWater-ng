import routerMap from '../router/routerMap';

export default [
  {
    path: '',
    component: routerMap.NavComponent,
    data: {
      title: '导航'
    }
  },
  {
    path: 'paymentSuccessComponent',
    component: routerMap.PaymentSuccessComponent,
    data: {
      title: '支付成功'
    }
  }
];
