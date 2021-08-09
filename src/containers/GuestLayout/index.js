import React from "react";
import { Route,Redirect } from "react-router-dom";
import "./guest-layout.css";
import NavbarGuest from "../../components/NavbarGuest";

function GuestRender(props) {
  return (
    <div>
      {/*  Cai nay chay truoc loading page va de len html*/}
      <NavbarGuest />
      {props.children}
      {/*<FooterGuest />*/}
    </div>
  );
}
export default function GuestLayout({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("UserAdmin")) {
          return <Redirect to="/dashboard"/>
        } else {
          return(
             <GuestRender>
              <Component {...propsComponent} />
            </GuestRender>
          )
        }
      }}
    />
  );
}
