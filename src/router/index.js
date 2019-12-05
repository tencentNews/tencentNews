/*
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-25 17:30:23
 * @LastEditors: losn
 * @LastEditTime: 2019-12-05 19:34:49
 */
import Vue from 'vue'
import Router from 'vue-router'
import Apartment from '@/components/Apartment'
import Champing from '@/pages/Champing'
// import MinePage from '@/pages/MinePage'
import Cadelar from '@/pages/Cadelar'

import MyPage from '@/pages/MyPage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import InstallPage from '@/pages/InstallPage'
import LoaddingPage from '@/pages/LoaddingPage'
import MessagePage from '@/pages/MessagePage'
import ForgetCodePage from '@/pages/ForgetCodePage'
import CBAPage from '@/pages/CBAPage'
import DetailPage from '@/pages/DetailPage'

import Error404 from '@/pages/error404'
import Circle from '@/components/Circle'

import Index from '@/pages/Index'
import Search from '@/pages/Search'
import FenLei from '@/pages/FenLei'
import SearchDetail from '@/pages/SearchDetail'
import DetailQuanBu from '@/components/DetailQuanBu'
import DetailShiPin from '@/components/DetailShiPin'
import DetailSaiCheng from '@/components/DetailSaiCheng'
import DetailYongHu from '@/components/DetailYongHu'
import MentPhoto from '@/components/MentPhoto'
// import Calendar from '@/components/Calendar'
import Community from '@/pages/Community'
import Calendar from '@/components/Calendar'
import Camera from '@/components/Camera'
import MentPart2 from '@/components/MentPart2'
import HotDoor from '@/components/HotDoor'

import ContestPage from '@/pages/ContestPage';
import ConPanPage from '@/pages/ConPanPage';
import ConHotPage from '@/pages/ConHotPage';
import ConNBAPage from '@/pages/ConNBAPage';
import  ConHotTop from '@/components/ConHotTop';
import  ConNBARank from '@/components/ConNBARank';
import  ConPerson from '@/components/ConPerson';
import  Team from '@/components/Team';

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    // {
    //   path:"Apartment",
    //   component:Apartment,
    //   props:true,
    // },
    {
      path: '/Community',
      name: 'Community',
      component: Community,
                    children:[
                    {
                      path:"Circle",
                      component:Circle,
                      props:true
                    },
                    {
                      path:"HotDoor",
                      component:HotDoor,
                      props:true
                    },
                    {
                      path:"Apartment",
                      component:Apartment,
                      props:true,
                    },
                                    // children:[
                                    //   {
                                    //     path:"MentPhoto",
                                    //     component:MentPhoto,
                                    //     props:true
                                    //   },
                                    //   {
                                    //     path:"MentPart2",
                                    //     component:MentPart2,
                                    //     props:true
                                    //   },
                                    //   {
                                    //     path:"Camera",
                                    //     component:Camera,
                                    //     props:true
                                    //   }
                                    // ]

                  
                    {
                      path:"MentPart2",
                      component:MentPart2,
                      props:true
                    }
                      
                    ]
    },
  
    {
      path: '/Champing',
      name: 'Champing',
      component: Champing
    },
    { 
      path: '/Cadelar',
      name: 'Cadelar',
      component: Cadelar
    },
    {
      path: '/MyPage',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/RegisterPage',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/InstallPage',
      name: 'InstallPage',
      component: InstallPage
    },
    {
      path: '/LoaddingPage',
      name: 'LoaddingPage',
      component: LoaddingPage
    },
    {
      path: '/MessagePage',
      name: 'MessagePage',
      component: MessagePage
    },
    {
      path: '/ForgetCodePage',
      name: 'ForgetCodePage',
      component: ForgetCodePage
    },
    {
      path: '/CBAPage',
      name: 'CBAPage',
      component: CBAPage
    },
    {
        path: '/DetailPage/:id',
        name: 'DetailPage',
        component: DetailPage,
        props:true
    },
    {
        path: '*',
        name: 'err404',
        component: Error404
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/FenLei',
      name: 'FenLei',
      component: FenLei
    },
    {
      path: '/SearchDetail',
      name: 'SearchDetail',
      component: SearchDetail,
                        children:[
                          {  
                            path:"/",
                            redirect:"/DetailQuanBu"
                          },
                          {
                            path:"DetailQuanBu",
                            component:DetailQuanBu,
                            props:true
                          },
                          {
                            path:"DetailShiPin",
                            component:DetailShiPin,
                            props:true
                          },
                          {
                            path:"DetailSaiCheng",
                            component:DetailSaiCheng,
                            props:true
                          },
                          {
                            path:"DetailYongHu",
                            component:DetailYongHu,
                            props:true
                          }
                        ]
    },
    {
      path: '/SearchDetail/:name',
      name: 'SearchDetail',
      component: SearchDetail,
      props:true
    }
    ,
    {
      path: '/ContestPage',
      name: 'ContestPage',
      component: ContestPage
    },
    {
      path: '/ConPanPage',
      name: 'ConPanPage',
      component: ConPanPage
    },
    {
      path: '/ConHotPage',
      name: 'ConHotPage',
      component: ConHotPage
    },
    ,{
      path: '/ConNBAPage',
      name: 'ConNBAPage',
      component: ConNBAPage,
          children:[
              {
                path:"ConHotTop",
                component:ConHotTop
              },
              {
                path:"ConNBARank",
                component:ConNBARank
              },
              {
                path:"ConPerson",
                component:ConPerson
              },
              {
                path:"Team",
                component:Team
              }
          ]
    }














  ]
})
