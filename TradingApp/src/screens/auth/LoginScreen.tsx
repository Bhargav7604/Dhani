import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { useAppDispatch } from '../../store/store';
import { login } from '../../store/slices/authSlice';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import { colors } from '../../styles/theme';

interface LoginForm {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  
  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      if (data.email === 'admin@indiabulls.com' && data.password === 'password123') {
        dispatch(login({
          token: 'mock-token',
          user: {
            id: '1',
            name: 'Admin User',
            email: data.email,
            clientId: 'CLIENT001',
          },
        }));
      } else {
        Alert.alert('Error', 'Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Error', 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Welcome to IB Algo
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Sign in to your account
        </Text>

        <Card style={styles.formCard}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Email"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                error={!!errors.email}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}

          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Password"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                error={!!errors.password}
                style={styles.input}
                secureTextEntry
              />
            )}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}

          <Button
            title="Sign In"
            onPress={handleSubmit(onSubmit)}
            loading={loading}
            style={styles.loginButton}
          />
        </Card>

        <Text style={styles.demoText}>
          Demo Credentials:{'\n'}
          Email: admin@indiabulls.com{'\n'}
          Password: password123
        </Text>
      </View>
    </ScrollView>
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
    padding: 20,
    paddingTop: 100,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
    color: colors.text.primary,
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 32,
    color: colors.text.tertiary,
  },
  formCard: {
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
    backgroundColor: colors.surface,
  },
  errorText: {
    color: colors.status.error,
    fontSize: 12,
    marginTop: -12,
    marginBottom: 8,
  },
  loginButton: {
    marginTop: 16,
  },
  demoText: {
    textAlign: 'center',
    color: colors.text.tertiary,
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default LoginScreen;