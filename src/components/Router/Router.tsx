import { CurrentPassword } from "features/personalInformation/pages/ChangePassword/CurrentPassword";
import { NewPassword } from "features/personalInformation/pages/ChangePassword/NewPassword";
import { ConfirmNewPassword } from "features/personalInformation/pages/ChangePassword/ConfirmNewPassword";
import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { PersonalInformationRoutes } from "features/personalInformation/constants/routes"

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path={PersonalInformationRoutes.currentPassword} 
                    component={CurrentPassword} 
                />
                <Route  
                    path={PersonalInformationRoutes.newPassword} 
                    component={NewPassword} 
                />
                <Route  
                    path={PersonalInformationRoutes.confirmNewPassword} 
                    component={ConfirmNewPassword} 
                />
            </Switch>
        </BrowserRouter>
    );
};