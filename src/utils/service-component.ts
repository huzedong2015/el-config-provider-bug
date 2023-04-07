import { createApp } from "vue";

/**
 * 创建组件
 * @param component
 * @param props
 */
export function createComponent(
  component: Parameters<typeof createApp>["0"],
  props?: Parameters<typeof createApp>["1"],
) {
  const componentInstance = createApp(component, props);
  const vm = componentInstance.mount(document.createElement("div"));

  document.body.append(vm.$el);

  /**
   * 销毁
   */
  function destroy() {
    vm.$el?.parentNode?.removeChild(vm.$el);
    componentInstance.unmount();
  }

  // 返回组件实例
  return {
    destroy,
    vm,
  };
}
