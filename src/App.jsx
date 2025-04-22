import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import 'mantine-react-table/styles.css'; 
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routing from "./Routing";
import { theme } from "./theme/Theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = () => {



  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <Notifications position="top-right" zIndex={99999} limit={5} />
        <BrowserRouter>
          <Routes>
            {/* {auth_token ? (
            <Route path="/*" element={<Routing />} />
          ) : (
            <Route path="/*" element={<Login />} />
          )} */}
            <Route path="/*" element={<Routing />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App