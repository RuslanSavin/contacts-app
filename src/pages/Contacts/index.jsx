import { useContacts } from "../../hooks/useContacts";

export const Contacts = () => {
  const contacts = useContacts();

  if (contacts.isLoading) {
    return <div>...loading</div>;
  }

  if (contacts.isError) {
    return <div>...error</div>;
  }

  return <div>{contacts.data[0].email}</div>;
};
