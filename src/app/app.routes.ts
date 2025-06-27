import { Routes } from '@angular/router';
import { UtmGeneratorComponent } from './components/utm-generator/utm-generator.component';
import {PasswordGeneratorComponent} from "./components/password-generator/password-generator.component";
import {JsonCsvComponent} from "./components/json-csv/json-csv.component";
import {Base64Component} from "./components/base64/base64.component";
import {MarkdownComponent} from "./components/markdown/markdown.component";
import {LoremComponent} from "./components/lorem/lorem.component";
import {ValidatorsComponent} from "./components/validators/validators.component";
import {AboutComponent} from "./components/about/about.component";
import {PrivacyPolicyComponent} from "./components/privacy-policy/privacy-policy.component";
import {BlogListComponent} from "./components/blog-list/blog-list.component";
import {BlogPostComponent} from "./components/blog-post/blog-post.component";

export const routes: Routes = [
  { path: '', redirectTo: 'utm', pathMatch: 'full' },
  { path: 'utm', component: UtmGeneratorComponent },
  { path: 'password', component: PasswordGeneratorComponent },
  { path: 'json-csv', component: JsonCsvComponent },
  { path: 'base64', component: Base64Component },
  { path: 'markdown', component: MarkdownComponent },
  { path: 'lorem', component: LoremComponent },
  { path: 'validators', component: ValidatorsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:slug', component: BlogPostComponent },
];

