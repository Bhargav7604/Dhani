import React from 'react';
import { LayoutContainer, AuthCard, ContentBox, Image } from './AuthLayoutStyles';
import { AuthLayoutProps } from './AuthLayoutUtils';


const AuthLayout: React.FC<AuthLayoutProps> = ({ children, imageSrc }) => {
    return (
        <LayoutContainer>
            <AuthCard>
                {children}
            </AuthCard>

            <ContentBox>
                {imageSrc && <Image src={imageSrc} alt="Auth background" />}
            </ContentBox>
        </LayoutContainer>
    );
};

export default AuthLayout;
