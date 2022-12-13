import { Block } from '../../utils/core/Block';
import linkTemplate from './routed-link.pug';
import { Router } from '../../utils/core/Router';

type RoutedLinkProps = {
  events?: Record<string, any>;
  url: string;
  className: string;
  linkText: string;
};

export class RoutedLink extends Block<RoutedLinkProps> {
  constructor(props: RoutedLinkProps) {}
}
