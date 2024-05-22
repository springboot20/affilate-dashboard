
  const routes = createBrowserRouter([
    {
      path: '/',
      element: user && tokens?.accessToken ? <Navigate to='/' /> : <Navigate to='/auth/register' />,
    },
    {
      element: (
        <PrivateRoute>
          <AppLayout />
        </PrivateRoute>
      ),
      path: '/',
      children: [
        {
          path: '/add-product',
          element: <AddProduct />,
        },
        {
          path: '/shop',
          element: <Shop />,
          children: [],
        },
        {
          path: '/product',
          element: <ProductDescription />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/partner',
          element: <Partner />,
        },
      ],
    },
    {
      path: '',
      children: [
        {
          path: '/auth/register',
          element: (
          
          ),
        },
      ],
    },
  ]);
