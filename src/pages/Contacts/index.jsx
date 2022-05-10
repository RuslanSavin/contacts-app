import { useContacts } from "../../hooks/useContacts";
import { Box, Container, Grid, Typography } from "@mui/material";
import { ContactsTable } from "../../components/ContactsTable";
import CircularProgress from "@mui/material/CircularProgress";
import { useDataViewMode } from "../../hooks/useDataViewMode";
import { ToggleDataViewMode } from "../../components/ToggleDataViewMode";

export const Contacts = () => {
  const contacts = useContacts();
  const [dataViewMode, setDataViewMode] = useDataViewMode();

  const loadingJSX = contacts.isLoading ? <CircularProgress /> : null;
  const errorJSX = contacts.isError ? <div>...error</div> : null;
  const dataJSX = contacts.data ? (
    <ContactsTable data={contacts.data} dataViewMode={dataViewMode} />
  ) : null;

  return (
    <Container mt={4}>
      <Grid container>
        <Grid item xs={12} mb={3}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h3" component="h1">
              Contacts
            </Typography>
            <ToggleDataViewMode
              dataViewMode={dataViewMode}
              setDataViewMode={setDataViewMode}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          {errorJSX}
          {dataJSX}
          {loadingJSX}
        </Grid>
      </Grid>
    </Container>
  );
};
