import format from "date-fns/format";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { CopyToClipboardText } from "../CopyToClipboardText";
import { NATIONALITIES_HUMAN_NAME } from "../../constants/nationality";
import { DATA_VIEW_MODES } from "../../constants/dataViewModes";

export const ContactsTable = ({ data, dataViewMode }) => {
  if (dataViewMode === DATA_VIEW_MODES.TABLE) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="contacts table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Full name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Nationality</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((contact) => (
              <TableRow
                key={contact.login.uuid}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Avatar alt="avatar" src={contact.picture.thumbnail} />
                </TableCell>
                <TableCell>
                  {contact.name.title} {contact.name.first} {contact.name.last}
                </TableCell>
                <TableCell>
                  <Typography>
                    {format(new Date(contact.dob.date), "MM/dd/yyyy")}
                  </Typography>
                  <Typography>{contact.dob.age} years</Typography>
                </TableCell>
                <TableCell>
                  <CopyToClipboardText text={contact.email} />
                </TableCell>
                <TableCell>
                  <CopyToClipboardText text={contact.phone} />
                </TableCell>
                <TableCell>
                  <Typography>{contact.location.country}</Typography>
                  <Typography variant="body2">
                    {contact.location.city}, {contact.location.street.name}{" "}
                    {contact.location.street.number}
                  </Typography>
                </TableCell>
                <TableCell>{NATIONALITIES_HUMAN_NAME[contact.nat]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  if (dataViewMode === DATA_VIEW_MODES.GRID) {
    return (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((contact) => (
          <Grid item xs={2} sm={4} md={4} key={contact.login.uuid}>
            <Card sx={{ minWidth: 275, minHeight: 350 }}>
              <CardContent>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={2}
                >
                  <Avatar
                    alt="avatar"
                    src={contact.picture.thumbnail}
                    sx={{ marginRight: 2 }}
                  />
                  <Typography gutterBottom>
                    {contact.name.title} {contact.name.first}{" "}
                    {contact.name.last}
                  </Typography>
                </Box>
                <Typography gutterBottom>
                  Birthday: {format(new Date(contact.dob.date), "MM/dd/yyyy")}
                </Typography>
                <Typography gutterBottom>
                  Age: {contact.dob.age} years
                </Typography>
                <Typography gutterBottom>
                  Email: <CopyToClipboardText text={contact.email} />
                </Typography>
                <Typography gutterBottom>
                  Phone: <CopyToClipboardText text={contact.phone} />
                </Typography>
                <Typography gutterBottom>
                  Country: {contact.location.country}
                </Typography>
                <Typography gutterBottom>
                  Address:
                  {contact.location.city}, {contact.location.street.name}{" "}
                  {contact.location.street.number}
                </Typography>
                <Typography gutterBottom>
                  {NATIONALITIES_HUMAN_NAME[contact.nat]}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
};
