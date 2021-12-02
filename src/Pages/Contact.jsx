import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { IoWarning } from 'react-icons/io5';

export const Contact = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: 'onBlur' });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    };

    return (
        <Wrapper>
            <Title>Обратная связь</Title>
            <From onSubmit={handleSubmit(onSubmit)}>
                <InputBlock>
                    <InputName>Имя:</InputName>
                    <Input {...register('firstName', { required: 'Обязательное поле' })} />
                </InputBlock>
                {errors?.firstName && (
                    <Error>
                        <IoWarning />
                        <ErrorMess>{errors?.firstName.message || 'Ошибка!'}</ErrorMess>
                    </Error>
                )}
                <InputBlock>
                    <InputName>Фамилия:</InputName>
                    <Input {...register('lastName', { required: 'Обязательное поле' })} />
                </InputBlock>

                {errors?.lastName && (
                    <Error>
                        <IoWarning />
                        <ErrorMess>{errors?.lastName.message || 'Ошибка!'}</ErrorMess>
                    </Error>
                )}

                <InputBlock>
                    <InputName>E-mail:</InputName>
                    <Input
                        {...register('email', {
                            required: 'Обязательное поле',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Невалидный e-mail',
                            },
                        })}
                    />

                    {errors?.email && (
                        <Error>
                            <IoWarning />
                            <ErrorMess>{errors?.email.message || 'Ошибка!'}</ErrorMess>
                        </Error>
                    )}
                </InputBlock>
                <InputBlock>
                    <InputName>Номер</InputName>{' '}
                    <Input
                        {...register('tel', {
                            required: 'Обязательное поле',
                            pattern: {
                                value: /(\+?\d[- .]*){7,13}/,
                                message: 'Невалидный номер',
                            },
                        })}
                    />
                </InputBlock>
                {errors?.tel && (
                    <Error>
                        <IoWarning />
                        <ErrorMess>{errors?.tel.message || 'Ошибка!'}</ErrorMess>
                    </Error>
                )}

                <InputBlock>
                    <InputName>Описание:</InputName>
                    <Textarea
                        {...register('text', {
                            minLength: {
                                value: 15,
                                message: 'Минимум 15 символов',
                            },
                        })}
                        rows="5"
                    />
                </InputBlock>
                {errors?.text && (
                    <Error>
                        <IoWarning />
                        <ErrorMess>{errors?.text.message || 'Ошибка!'}</ErrorMess>
                    </Error>
                )}
                <Botton type="submit" disabled={!isValid} />
            </From>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    padding: 0 1rem;
    background-color: var(--bg-color);

    @media (min-width: 768px) {
        padding: 2rem;
    }
`;

const Title = styled.h1`
    font-size: var(--fz-xl);
    color: var(--colors-text);
    margin: 2rem 0;
    padding: 0;
    text-transform: uppercase;
    word-wrap: break-word;
`;

const From = styled.form`
    width: 100%;
    max-width: 500px;
    margin: 2rem auto;
`;

const InputBlock = styled.span`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    padding: 1rem;
    border-radius: var(--radii);
    border: 1px solid var(--colors-text);
    width: 100%;
    margin-top: 1rem;
`;

const Textarea = styled.textarea`
    padding: 1rem;
    border-radius: var(--radii);
    border: 1px solid var(--colors-text);
    width: 100%;
    margin-top: 1rem;
    resize: none;
`;

const Botton = styled.input`
    padding: 1.2rem 0;
    border-radius: var(--radii);
    border: none;
    width: 100%;
    box-shadow: var(--shadow);
    background-color: red;
    color: #fff;
    font-weight: var(--fw-bold);
    text-transform: uppercase;
    margin-top: 2rem;
    cursor: pointer;
`;

const InputName = styled.span`
    color: var(--colors-text);
    font-weight: var(--fw-bold);
    font-size: var(--fz-md);
    margin: 1rem 0 0;
    text-transform: uppercase;
`;

const Error = styled.span`
    color: red;
    font-size: var(--fz-md);
    margin: 0.5rem 0 0;
    display: flex;
`;

const ErrorMess = styled.span`
    font-weight: var(--fw-light);
    font-size: var(--fz-sm);
    margin: 0 0 0 0.2rem;
    display: block;
`;
