import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Wrapper } from '../../components/UI/Wrapper'
import Main from '../../components/UI/Wrapper/Main'
import PageHolder from '../../components/UI/Wrapper/PageHolder'

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <PageHolder>
          <Main>{<Outlet />}</Main>
        </PageHolder>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout
