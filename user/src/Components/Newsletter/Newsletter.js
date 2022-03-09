import React from "react";
import styles from "./Newsletter.module.scss";
import { Button, Checkbox } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Newsletter() {
  return (
    <div>
      <div className={styles.newsWrapper}>
        <h1>Newsletter and Offer Update</h1>
        <p className="my-2">
          Get up to <span>30%</span> off your first purchase by joining
          Newsletter, and receive weekly amazing Offer!
        </p>

        <FormGroup>
          <div className="d-flex my-4">
            <input type="mail" placeholder="Enter your mail" className={styles.newsInput} />
            <Button variant="contained" >
              Subscribe
            </Button>
          </div>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            className=""
            label="I have read and agreed the Terms, and Privacy Policy"
          />
        </FormGroup>
      </div>
    </div>
  );
}
