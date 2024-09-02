// import React from 'react';
// import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';
// import Layout from /layout';
// import Page404 from '/pages/404'; 

// const ContentPage = () => {
//   const router = useRouter();
//   const { content } = router.query;

//   console.log("Router query content:", content); // Лог для отображения значения content

//   // Проверка на наличие вложенных путей и корректная обработка импорта
//   const Component = dynamic(
//     () =>
//       import(`../app/components/${content ? content : 'firstScreen'}`)
//         .then((mod) => {
//           console.log("Component loaded successfully:", mod); // Лог успешной загрузки компонента
//           return mod.default || mod;
//         })
//         .catch((error) => {
//           console.error("Error loading component:", error); // Лог ошибки загрузки компонента
//           return Page404;
//         }),
//     {
//       loading: () => {
//         console.log("Component is loading..."); // Лог во время загрузки
//         return <Page404 />;
//       },
//       ssr: false, // Отключение серверного рендеринга для корректной работы динамического импорта
//     }
//   );

//   console.log("Rendering Layout with Component"); // Лог перед рендерингом компонента

//   return (
//     <Layout>
//       <Component />
//     </Layout>
//   );
// };

// export default ContentPage;
