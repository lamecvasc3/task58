import React from "react";
import { Container } from "@material-ui/core";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { ProcessDescriptionHeader } from "../../../../../components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "../../../../../components/ProcessPageFooter";
import { AppBar } from "../../../../../components/AppBar";
import { Button } from "../../../../../components/Button";
import { PasswordInput } from "../../../components/inputs/PasswordInput";
import { cancelLabel, nextLabel } from "../../../../../constants/buttons/labels";

import { useStyle } from "../../../../../_assets/makeStyles/container/container.style";
import "../../../../../_assets/css/forms/mainform.scss"

export const ConfirmNewPassword: React.FC = () => {

  const style = useStyle();
  

  const [passwordInput, setPasswordInput] = React.useState("");

  const onPasswordChange = (event: string) => {
    setPasswordInput(event)
  }

  const onCancelButtonClick = () => {
    console.log("cancelar")
  };

  const onNextButtonClick = () => {
    console.log("Next")
  };

  return (
    <Container maxWidth="xs" className={style.container}>
      <div className="main-form">
        <AppBar
          action={
            <Button
              palette="secondary"
              size="small"
              startIcon={<Close color="primary" />}
              onClick={onCancelButtonClick}
            >
              {cancelLabel}
            </Button>
          }
        />
        <div className="form-body">
          <div className="top">
            <ProcessDescriptionHeader
              title="Alterar sua senha"
              subtitle="Confirme a nova senha para sua conta"
              description="xxxx"
            />
          </div>
          <div className="content">
            <div className="align-top">
              <PasswordInput
                label="Confirmar senha"
                onChange={onPasswordChange}
                value={passwordInput}
              />
            </div>
          </div>
        </div>
        <ProcessPageFooter
          primaryButton={
            <Button
              endIcon={<KeyboardArrowRight color="secondary" />}
              onClick={onNextButtonClick}
            >
              {nextLabel}
            </Button>
          }
        />
      </div>
    </Container>
  );
};
