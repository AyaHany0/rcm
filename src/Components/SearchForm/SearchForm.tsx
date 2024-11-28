import React from "react";
import { Formik, Form } from "formik";
import { Box, Button, TextField, Alert } from "@mui/material";
import * as Yup from "yup";

interface SearchFormProps {
  onSubmit: (values: { num: string; code: string }) => void;
  loading: boolean;
  apiError?: string | null;
}

const searchSchema = Yup.object().shape({
  num: Yup.string().required("Number is required"),
  code: Yup.string().required("Code is required"),
});

const SearchForm: React.FC<SearchFormProps> = ({
  onSubmit,
  loading,
  apiError,
}) => {
  const initialValues = { num: "", code: "" };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={searchSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => (
        <Form>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              fullWidth
              name="num"
              label="Number"
              value={values.num}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.num && Boolean(errors.num)}
              helperText={touched.num && errors.num}
            />
            <TextField
              fullWidth
              name="code"
              label="Code"
              value={values.code}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.code && Boolean(errors.code)}
              helperText={touched.code && errors.code}
            />
            {apiError && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {apiError}
              </Alert>
            )}
          </Box>
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting || loading}
            sx={{ marginTop: 1 }}
          >
            {loading ? "Searching..." : "Search"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
