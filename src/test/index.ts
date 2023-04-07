import { createComponent } from "@/utils/service-component";
import Component from "./com.vue";

/**
 * 创建文件
 */
export function addComponentToBody(options: {
  data?: {
    personLiableCode: string;
    subordinateCode: string[];
  };
  title: string;
  disabled?: boolean;
}) {
  createComponent(Component, {});
}
