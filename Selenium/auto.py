from selenium import webdriver 
from selenium.webdriver.common.by import By 
from selenium.webdriver.support.ui import WebDriverWait 
from selenium.webdriver.support import expected_conditions as EC
import time  

print("Iniciando os testes.\n Primeiro teste: CREATE")
#Teste Create
driver = webdriver.Chrome()  

driver.maximize_window()  

driver.get("http://localhost:5173/empresa")  

time.sleep(3)

driver.find_element(By.NAME, "adicionar").click()

time.sleep(3)

nEmpresa = driver.find_element(By.NAME, "nEmpresa").send_keys("Nome da Empresa")
nFuncionario = driver.find_element(By.NAME, "nFuncionario").send_keys("Nome do Funcionário")
salario = driver.find_element(By.NAME, "salario").send_keys(1250)
cargo = driver.find_element(By.NAME, "cargo").send_keys("Cargo do Funcionário")

time.sleep(2)

botao = driver.find_element(By.NAME, "salvar").click()

WebDriverWait(driver, 20).until(EC.alert_is_present())
alert = driver.switch_to.alert
alert.accept()

time.sleep(3)

driver.find_element(By.NAME, "home").click()

time.sleep(3)

print("Teste CREATE finalizado\n")  

print("Iniciando os testes de UPDATE\n")

driver.find_element(By.LINK_TEXT, "Editar").click()

time.sleep(5)

driver.find_element(By.NAME, "nEmpresa").clear()
nEmpresa = driver.find_element(By.NAME, "nEmpresa").send_keys("Nome da Empresa Alterado")
driver.find_element(By.NAME, "nFuncionario").clear()
nFuncionario = driver.find_element(By.NAME, "nFuncionario").send_keys("Nome do Funcionário Alterado")
driver.find_element(By.NAME, "salario").clear()
salario = driver.find_element(By.NAME, "salario").send_keys(200000)
driver.find_element(By.NAME, "cargo").clear()
cargo = driver.find_element(By.NAME, "cargo").send_keys("Cargo do Funcionário Alterado")

time.sleep(3)

driver.find_element(By.NAME, "atualizar").click()

time.sleep(3)

print("Teste UPDATE finalizado\n")  

print("Iniciando os testes de DELETE\n")

driver.find_element(By.NAME, "home").click()

time.sleep(3)

driver.find_element(By.ID, "deletar").click()

WebDriverWait(driver, 20).until(EC.alert_is_present())
alert = driver.switch_to.alert
alert.accept()

time.sleep(3)