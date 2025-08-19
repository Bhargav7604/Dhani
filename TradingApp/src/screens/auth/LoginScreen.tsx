import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, TextInput, Card } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppDispatch, RootState } from '../../store/store';
import { loginUser } from '../../store/slices/authSlice';
import Button from '../../components/common/Button';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { colors, spacing, typography } from '../../styles/theme';

const LoginScreen = () => {
  const [email, setEmail] = useState('admin@indiabulls.com');
  const [password, setPassword] = useState('password123');
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      await dispatch(loginUser({ email, password })).unwrap();
    } catch (error) {
      Alert.alert('Login Failed', error as string);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Trading App</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
        
        <Card style={styles.card}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            secureTextEntry
            style={styles.input}
          />
          
          <Button
            title="Sign In"
            onPress={handleLogin}
            style={styles.button}
          />
          
          {error && (
            <Text style={styles.errorText}>{error}</Text>
          )}
        </Card>
        
        <Text style={styles.demoText}>
          Demo Credentials:{'\n'}
          Email: admin@indiabulls.com{'\n'}
          Password: password123
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
  title: {
    ...typography.h1,
    textAlign: 'center',
    marginBottom: spacing.sm,
    color: colors.primary,
  },
  subtitle: {
    ...typography.body,
    textAlign: 'center',
    marginBottom: spacing.xl,
    color: colors.textSecondary,
  },
  card: {
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  input: {
    marginBottom: spacing.md,
  },
  button: {
    marginTop: spacing.md,
  },
  errorText: {
    color: colors.error,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  demoText: {
    ...typography.caption,
    textAlign: 'center',
    color: colors.textSecondary,
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 8,
  },
});

export default LoginScreen;