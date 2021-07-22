import React from "react";
import { Container } from "@material-ui/core";
import { KeyboardArrowRight } from '@material-ui/icons';
import { CloseButton } from "features/personalInformation/components/CloseButton"
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { PasswordInput } from "features/personalInformation/components/inputs/PasswordInput";
import { cancelLabel, nextLabel } from "constants/buttons/labels";

import { useStyle } from "_assets/makeStyles/container/container.style";
import "_assets/css/forms/mainform.scss"
import { PopupOk } from "components/PopupOk/PopupOk";

export const ConfirmNewPassword: React.FC = () => {

  const style = useStyle();

  const [showPopup, setShowPopup] = React.useState(false)

  const [passwordInput, setPasswordInput] = React.useState("");

  const onPasswordChange = (event: string) => {
    setPasswordInput(event)
  }

  const onCancelButtonClick = () => {
    console.log("cancelar")
  };

  const onNextButtonClick = () => {
    setShowPopup(prev => !prev)
  };

  return (
    <Container maxWidth="xs" className={style.container}>
      <div className="main-form">
        <AppBar
          action={
            <Button
              palette="secondary"
              size="small"
              startIcon={<CloseButton/>}
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
            <PopupOk showPopup={showPopup} setShowPopup={setShowPopup} />
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
