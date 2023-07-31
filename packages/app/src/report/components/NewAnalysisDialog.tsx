import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Theme,
} from "@mui/material";
import { FC } from "react";
import { makeStyles } from "tss-react/mui";
import { AnalysisInputForm } from "../../analysis/components/AnalysisInputForm";
import { useReportStore } from "../stores/fe-report-store";

export const NewAnalysisDialog: FC = () => {
  const { classes } = useStyles();
  const { newAnalysisDialogOpen, closeNewAnalysisDialog } = useReportStore();

  return (
    <Dialog
      maxWidth="md"
      fullWidth
      open={newAnalysisDialogOpen}
      onClose={closeNewAnalysisDialog}
      scroll="body"
    >
      <DialogContent className={classes.dialogContent}>
        <AnalysisInputForm onAfterSubmit={closeNewAnalysisDialog} />
      </DialogContent>
      <DialogActions sx={{ padding: 2 }}>
        <Button onClick={closeNewAnalysisDialog}>Close (ESC)</Button>
      </DialogActions>
    </Dialog>
  );
};

const useStyles = makeStyles()((theme: Theme) => ({
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    padding: 0,
  },
}));
