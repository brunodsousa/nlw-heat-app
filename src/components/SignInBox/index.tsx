import React from 'react';
import { View } from 'react-native';

import { Button } from '../Button';
import { useAuth } from '../../hooks/auth';

import { COLORS } from '../../theme';
import { styles } from './style';

export function SignInBox() {
    const { signIn, isSigningIn } = useAuth();

    return (
        <View style={styles.container}>
            <Button
                title="ENTRAR COM O GITHUB"
                color={COLORS.BLACK_PRIMARY}
                backgroundColor={COLORS.YELLOW}
                icon="github"
                onPress={signIn}
                isLoading={isSigningIn}
            />
        </View>
    );
}