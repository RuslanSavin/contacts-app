import PropTypes from "prop-types";
import { useCallback, useState } from "react";
import { useCopyToClipboard } from "react-use";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const styles = {
  button: {
    alignItems: "center",
    cursor: "pointer",
    color: "blue",
    textTransform: "none",
    ":hover": {
      color: "cornflowerblue",
    },
  },
};

const STATUS_COPY = {
  COPY: "copy",
  COPIED: "copied",
};

const TITLE_BY_STATUS = {
  [STATUS_COPY.COPY]: "Copy",
  [STATUS_COPY.COPIED]: "Copied",
};

export const CopyToClipboardText = ({ text }) => {
  const [, copyToClipboard] = useCopyToClipboard();
  const [statusCopy, setStatusCopy] = useState(STATUS_COPY.COPY);

  const onClickCopy = useCallback(() => {
    copyToClipboard(text);
    setStatusCopy(STATUS_COPY.COPIED);
  }, [copyToClipboard, text]);

  const onClickAway = useCallback(() => {
    setStatusCopy(STATUS_COPY.COPY);
  }, [setStatusCopy]);

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Tooltip title={TITLE_BY_STATUS[statusCopy]} placement="top" arrow>
        <Button display="flex" sx={styles.button} onClick={onClickCopy}>
          <FileCopyOutlinedIcon fontSize="small" sx={{ marginRight: 1 }} />
          {text}
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
};

CopyToClipboardText.propTypes = {
  text: PropTypes.string.isRequired,
};
