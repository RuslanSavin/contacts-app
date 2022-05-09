import { useContacts } from "../../hooks/useContacts";
import { Container, Grid, Typography } from "@mui/material";
import { ContactsTable } from "../../components/ContactsTable";
import CircularProgress from "@mui/material/CircularProgress";

export const Contacts = () => {
  const contacts = useContacts();

  const loadingJSX = contacts.isLoading ? <CircularProgress /> : null;
  const errorJSX = contacts.isError ? <div>...error</div> : null;
  const dataJSX = contacts.data ? <ContactsTable data={contacts.data} /> : null;

  return (
    <Container mt={4}>
      <Grid container>
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" component="h1">
            Contacts
          </Typography>
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
