import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import Feature from "./feature/feature";
import Footer from "./footer/footer";
import Header from "./header/header";
import Aboutus from "./aboutus/aboutus";
import Testimonials from "./testimonials/testimonials";
import FAQ from "./faq/faq";
import Clients from "./clients/clients";
import Contact from "./contact/contact";
import Form from "./contact/form";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Feature,
    name: "Feature",
    inputs: [
      {
        name: "image",
        type: "file",
        allowedFileTypes: ["svg"],
      },
      {
        name: "title",
        type: "string",
      },
      {
        name: "description",
        type: "string",
      },
      {
        name: "buttonText",
        type: "string",
      },
    ],
  },
  {
    component: Footer,
    name: "Footer",
    inputs: [],
  },
  {
    component: Header,
    name: "Header",
    inputs: [
      {
        name: "logo",
        type: "file",
      },
    ],
  },
  {
    component: Aboutus,
    name: "About us",
    inputs: [
      {
        name: "image",
        type: "file",
        allowedFileTypes: ["svg"],
      },
      {
        name: "title",
        type: "string",
      },
      {
        name: "heading",
        type: "string",
      },
      {
        name: "descriptionTextOne",
        type: "string",
      },
      {
        name: "descriptionTextTwo",
        type: "string",
      },
      {
        name: "buttonText",
        type: "string",
      },
    ],
  },
  {
    component: FAQ,
    name: "FAQ",
    inputs: [
      {
        name: "question",
        type: "string",
      },
      {
        name: "answer",
        type: "longText",
      },
    ],
  },
  {
    component: Testimonials,
    name: "Testimonial",
    inputs: [
      {
        name: "authorImage",
        type: "file",
      },
      {
        name: "authorName",
        type: "string",
      },
      {
        name: "authorRole",
        type: "string",
      },
      {
        name: "description",
        type: "string",
      },
    ],
  },
  {
    component: Clients,
    name: "Client",
    inputs: [
      {
        name: "clientImage",
        type: "file",
      },
      {
        name: "redirectUrl",
        type: "string",
      },
    ],
  },
  {
    component: Contact,
    name: "Contact us",
    inputs: [
      {
        name: "title",
        type: "string",
      },
      {
        name: "address",
        type: "string",
      },
      {
        name: "emails",
        type: "string",
      },
    ],
  },
  {
    component: Form,
    name: "Form",
    inputs: [],
  },
];
