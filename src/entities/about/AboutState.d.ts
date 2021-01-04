import Institutional from "@/entities/about/Institutional";
import SocialItem from "@/entities/about/Social";

export default interface AboutState {
  institutional: Institutional|null;
  contacts: Contacts|null;
}