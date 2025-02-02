import css from "./Copyrights.module.css";

// css is an object containing all classes declared in the module.
// Any class will be replaced with a unique name

export function Copyrights(): JSX.Element {
    return (
        <div className={css.Container}>
			<p className={css.CopyrightsText}>All Rights Reserved ©</p>
        </div>
    );
}
