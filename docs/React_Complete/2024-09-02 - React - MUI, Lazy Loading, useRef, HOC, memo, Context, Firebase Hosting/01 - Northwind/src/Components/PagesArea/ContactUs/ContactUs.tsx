import { Button, ButtonGroup, Checkbox, FormControlLabel, TextareaAutosize, TextField } from "@mui/material";
import "./ContactUs.css";

function ContactUs(): JSX.Element {
    return (
        <div className="ContactUs">

            <form>

                <TextField label="Name" fullWidth />

                <TextField label="Email" fullWidth type="email" />

                <TextField label="Phone" fullWidth type="tel" />

                <TextField label="Message" multiline fullWidth rows={4} />

                <FormControlLabel label="I agree to the terms and conditions" control={<Checkbox />} />

                <ButtonGroup variant="contained" fullWidth>
                    <Button color="primary">Send</Button>
                    <Button type="reset" color="secondary">Clear</Button>
                </ButtonGroup>

            </form>

        </div>
    );
}

export default ContactUs;
