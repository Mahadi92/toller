import DashboardLayout from "@/components/layouts/DashboardLayout";
import { GetServerSidePropsContext } from "next/types";
import React from "react";

const DashboardIndex = () => {
  return (
    <DashboardLayout>
      <div className="wrapper">This is Dashboard</div>
    </DashboardLayout>
  );
};

// export async function getServerSideProps(context: GetServerSidePropsContext) {
// if (!session) {
//     return {
//         redirect: {
//             permanent: false,
//             destination: "/auth/login",
//         },
//     };
// }
// return {
//     props: {
//         session,
//     },
// };
// }

export default DashboardIndex;
